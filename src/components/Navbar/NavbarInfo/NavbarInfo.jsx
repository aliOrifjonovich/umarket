import React, { useState } from "react";
import ruFlag from "../../../assets/images/Ellipse.png";
import uzFlag from "../../../assets/images/uzbekistan.png";
import engFlag from "../../../assets/images/united-kingdom.png";
import locationIcon from "../../../assets/images/location_on.png";
import phone from "../../../assets/images/phone.png";

import cls from "./navinfo.module.scss";
import { ArrowIcon, LanguageRUIcon, CancelIcon } from "../../icons";
import { useTheme } from "styled-components";

const NavbarInfo = () => {
	const [open, setOpen] = useState(false);
	const [language, setLagnguage] = useState({
		image: uzFlag,
		text: "O'zbekcha",
	});
	const [locOpen, setLocOpen] = useState(false);
	const [location, setLocation] = useState("Toshkent");
	console.log("location", location);
	const flags = [
		{
			image: uzFlag,
			text: "O'zbekcha",
		},
		{
			image: ruFlag,
			text: "Русскый",
		},
		{
			image: engFlag,
			text: "English",
		},
	];
	const Location = ["Toshkent", "Samarqand", "Farg'ona"];

	return (
		<div className={cls.container}>
			<div className={cls.left_content}>
				<p className={cls.magazin}>Магазины</p>
				<p className={cls.odziv}>Оставить отзыв</p>
				<p className={cls.dastavka}>Доставка</p>
			</div>

			<div className={cls.right_content}>
				<div className={cls.right_content__item}>
					<img src={phone} alt="phone_image" className="phone_image" />
					<p className="phone_number">+998 97 778-17-08</p>
				</div>

				<div
					className={cls.right_content__item}
					onClick={() => {
						setLocOpen(true);
					}}>
					<img src={locationIcon} alt="location_image" />
					<p className={cls.location}>{location}</p>
				</div>

				{locOpen ? (
					<div className={cls.modal}>
						<div className={cls.modal_wrapper}>
							<div
								className={cls.modal_wrapper_cancelButton}
								onClick={() => {
									setLocOpen(false);
								}}>
								<CancelIcon />
							</div>
							<h2>Выберите город</h2>
							{Location.map((map) => (
								<div
									className={cls.modal_selections}
									onClick={() => {
										setLocation(map);
										setLocOpen(false);
									}}>
									{map}
								</div>
							))}
						</div>
					</div>
				) : null}

				<div className={cls.language_selection}>
					<button
						type="button"
						onClick={() => setOpen((prev) => !prev)}
						className={cls.language_selection_flex_items}>
						<img src={language.image} alt="d" />
						<p className={cls.language_text}>{language.text.slice(0, 3)}</p>
						<ArrowIcon />
					</button>

					{open ? (
						<div className={cls.selections}>
							{flags.map((map) => (
								<div
									className={cls.selections_item}
									onClick={() => setLagnguage(map)}>
									<img src={map.image} alt="dfds" />
									<h3>{map.text}</h3>
								</div>
							))}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default NavbarInfo;
