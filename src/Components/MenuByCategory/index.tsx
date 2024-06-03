import React, { Suspense, lazy, useState, useEffect } from 'react';
import { MenuItemByCategory, MenuItems } from '../../types';
import { useInView } from 'react-intersection-observer';

const MenuItemWrapper = lazy(() => import('../MenuItemWrapper'));

interface MenuByCategoryProps {
  menuItem: MenuItemByCategory;
}

const MenuByCategory = ({ menuItem }: MenuByCategoryProps) => {
  console.log(menuItem.menus);

  return (
    <>
      <div className="flex items-start justify-center">
        <p className="p-1 text-lg uppercase text-gray-500">{menuItem.category.name}</p>
      </div>
      {menuItem.menus.map((menu) => (
        <LazyMenuItemWrapper key={menu.id} menu={menu} />
      ))}
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
