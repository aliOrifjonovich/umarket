import React from 'react'
import "./navelem.module.scss"
import cls from "./navelem.module.scss";

const NavElements = () => {
  
  return (
		<div className={cls.container}>
			<ul className={cls.links}>
				<li className={cls.link}>Акции и скидки</li>
				<li className={cls.link}>Смартфоны и гаджеты</li>
				<li className={cls.link}>Телевизоры и аудио</li>
				<li className={cls.link}>Техника для кухни</li>
				<li className={cls.link}>Красота и здоровье</li>
				<li className={cls.link}>Ноутбуки и компьютеры</li>
			</ul>
		</div>
	);
}

export default NavElements