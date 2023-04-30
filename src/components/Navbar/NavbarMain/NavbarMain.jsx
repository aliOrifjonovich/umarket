import React, { useRef } from "react";
import cls from "./navMain.module.scss";
import {
	MainLogo,
	SearchIcon,
	SearchImage,
	ExitIcon,
	ComparisonIcon,
	FavoritesIcon,
	BasketIcon,
} from "../../icons";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const InputRef = useRef()
	return (
		<div className={cls.navbar_container}>
			<div className={cls.navbar_wrapper}>
				<Link to={"/"}>
					<MainLogo />
				</Link>
			</div>
			<div
				className={cls.search_input}
				onClick={() => {
					InputRef.current.focus();
				}}>
				<SearchIcon />
				<input type="text" placeholder="Поиск по товарам" ref={InputRef} />
				<SearchImage />
			</div>
			<ul className={cls.links}>
				<Link to="/basket">
					<li className={cls.link}>
						<BasketIcon  />
						Корзина
					</li>
				</Link>

				<Link to={"/favorites"}>
					<li className={cls.link}>
						<FavoritesIcon />
						Избранные
					</li>
				</Link>
				<Link to={"/comparison"}>
					<li className={cls.link}>
						<ComparisonIcon />
						Сравнение
					</li>
				</Link>

				<li className={cls.link}>
					<ExitIcon />
					Войти
				</li>
			</ul>
		</div>
	);
};

export default NavbarMain;
