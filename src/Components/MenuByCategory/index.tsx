import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { MenuItemByCategory, MenuItems } from 'types';

const MenuItemWrapper = lazy(() => import('@/Components/MenuItemWrapper'));

interface MenuByCategoryProps {
  menuItem: MenuItemByCategory;
}

const MenuByCategory = ({ menuItem }: MenuByCategoryProps) => {
  return (
    <>
      <div className="flex items-start justify-center">
        <p className="p-1 text-lg uppercase text-gray-500">{menuItem.category.name}</p>
      </div>
      {menuItem.menus.map((menu, idx) => {
        if (menu.visible) {
          return <LazyMenuItemWrapper key={menu._id} menu={menu} />;
        }
        return <></>;
      })}
    </>
  );
};

interface LazyMenuItemWrapperProps {
  menu: MenuItems;
}

const LazyMenuItemWrapper = ({ menu }: LazyMenuItemWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} style={{ minHeight: '100px' }}>
      {inView ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MenuItemWrapper menu={menu} />
        </Suspense>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MenuByCategory;
