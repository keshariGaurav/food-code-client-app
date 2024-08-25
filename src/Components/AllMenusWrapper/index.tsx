import axios from 'axios';
import { createRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CategoriesSlider from '@/Components/CategoriesSlider';
import SearchBar from '@/Components/InputBox/SearchBar';
import MenuByCategory from '@/Components/MenuByCategory';
import MenuItemDescription from '@/Components/MenuItemDescription';
import Navbar from '@/Components/Navbar';
import PopupMenu from '@/Components/PopupMenu';
import { useGetMenusQuery } from '@/redux/reducer/apiSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { MenuItemByCategory } from '@/types';

const AllMenusWrapper = () => {
  const { data: allMenus, isLoading, isSuccess } = useGetMenusQuery({});
  const [menuItems, setMenuItems] = useState<MenuItemByCategory[]>([]);
  const [modifiedMenuItems, setMofifiedMenuItems] = useState<MenuItemByCategory[]>([]);
  const popupMenuState = useSelector((state: RootState) => state.menuPopup);
  const cartState = useSelector((state: RootState) => state.cart);
  const alreadySelected = Object.values(cartState.items).some(
    (item) => item.menuId === popupMenuState.menuId,
  );
  const isVisible = popupMenuState.visible;
  const editMode = popupMenuState.editMode;
  const visiblePopupMenu = alreadySelected && isVisible && !editMode;
  const visibleMenuDescription = editMode || (!alreadySelected && isVisible);
  const refs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  function changeMenuItemsVisibility(
    searchTerm: string,
    data: MenuItemByCategory[] = [],
  ): void {
    let copyData = [...data];
    copyData = copyData.map((category) => {
      const updatedCategory = { ...category, visible: false };
      updatedCategory.menus = updatedCategory.menus.map((item) => {
        return { ...item, visible: false };
      });
      return updatedCategory;
    });

    for (const category of copyData) {
      if (category.category.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        category.visible = true;
        for (const item of category.menus) {
          item.visible = true;
        }
      }

      for (const item of category.menus) {
        if (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          item.visible = true;
          category.visible = true;
        }
      }
    }
    setMofifiedMenuItems(copyData);
  }

  const handleSearch = (text: string) => {
    changeMenuItemsVisibility(text, allMenus?.data);
  };

  useEffect(() => {
    if (allMenus && !isLoading) {
      const response = allMenus;
      setMenuItems(response.data);
      response.data.forEach((item: MenuItemByCategory) => {
        refs.current[item.category.name] = createRef();
      });
    }
  }, [allMenus, isLoading]);

  useEffect(() => {
    handleSearch('');
  }, [menuItems]);

  const scrollToCategory = (categoryName: string) => {
    const categoryRef = refs.current[categoryName];
    if (categoryRef && categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) return <div key="loading">Loading...</div>;

  return (
    <>
      <div>
        <div className="fixed left-0 right-0 top-0 z-20 mb-20 bg-white pt-2">
          <Navbar />
          <div className="">
            <SearchBar handler={handleSearch} />
          </div>
        </div>
        <CategoriesSlider onCategoryClick={scrollToCategory} menuItems={menuItems} />
        {modifiedMenuItems.map((menuItem: MenuItemByCategory, index) => (
          <div
            key={index}
            ref={refs.current[menuItem.category.name]}
            className={`${isVisible ? 'z-index-1 overscroll-none' : 'blur-none'}`}
          >
            {menuItem.visible && <MenuByCategory menuItem={menuItem} key={menuItem.id} />}
          </div>
        ))}
      </div>
      {visiblePopupMenu && <PopupMenu />}
      {visibleMenuDescription && <MenuItemDescription />}
    </>
  );
};

export default AllMenusWrapper;
