import React from "react";
import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";
import {
	FacebookIcon,
	Humo,
	InstagramIcon,
	LinkedInIcon,
	Payme,
	TwitterIcon,
	Uzcard,
} from "../icons";

const Footer = () => {
	return (
		<div className={cls.container}>
			<div className={cls.links}>
				<div className={cls.company}>
					<h1>Компания</h1>
					<h3>О компании</h3>
					<h3>Адреса магазинов</h3>
				</div>
				<div className={cls.information}>
					<h1>Информация</h1>
					<h3>Рассрочка </h3>
					<h3>Доставка </h3>
					<h3>Бонусы</h3>
				</div>
				<div className={cls.help}>
					<h1>Помощь покупателю</h1>
					<h3>Вопросы и ответы</h3>
					<h3>Как сделать заказ на сайте</h3>
					<h3>Обмен и возврат</h3>
				</div>
				<div className={cls.payment}>
					<h1>Способ оплаты</h1>
					<Payme />
				</div>
				<div className={cls.social_medias}>
					<h1>Мы в социальных сетях</h1>
					<div className={cls.medias}>
						<Link to="https://www.linkedin.com">
							<LinkedInIcon />
						</Link>
						<Link to="https://www.instagram.com">
							<InstagramIcon />
						</Link>
						<Link to="https://www.twitter.com">
							<TwitterIcon />
						</Link>
						<Link to="https://www.facebook.com">
							<FacebookIcon />
						</Link>
					</div>
				</div>
			</div>

			<div className={cls.contact_infos}>
				<div className={cls.phone_number}>
					<h1>Единый кол центр</h1>
					<h3>+9980 71-54-60-60</h3>
				</div>
				<div className={cls.email_info}>
					<h1>Почта для пожеланий и предложений</h1>
					<h3>info@udevsmarket.com</h3>
				</div>
			</div>
			<div className={cls.text_footer}>
				<h1>
					UdevsMarket.uz <span>Все права защищены</span>
				</h1>
			</div>
		</div>
	);
};

export default Footer;
