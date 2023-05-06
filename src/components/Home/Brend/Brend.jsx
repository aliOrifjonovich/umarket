import React from 'react'
import cls from "./brend.module.css"
import Grid from "@mui/material/Grid"
import Marquee from "react-fast-marquee";
import BrendImages from "../../../assets/images/brands-2.png"
import AppleImage  from "../../../assets/images/brands-3.png"
const Brend = () => {
  return (
		<div className="container">
			<div className={cls.wrapper}>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					sx={{ width: "100%", display: "flex", alignItems: "center" }}>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Телефоны</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Аксессуары</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Premium</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Спорт</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Игрушки</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Красота</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Книги</h3>
					</Grid>
					<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5}>
						<h3>Обувь</h3>
					</Grid>
				</Grid>
				<Marquee
					direction="left"
					pauseOnHover={true}
					speed={40}
					className={cls.marquee}>
					<Grid container spacing={{ xs: 2, md: 3 }}>
						{Array.from(Array(8)).map((_, index) => (
							<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5} key={index}>
								<div className={cls.brend_image}>
									<img src={BrendImages} alt="BrendsImage" />
								</div>
							</Grid>
						))}
					</Grid>
				</Marquee>
				<Marquee
					direction="right"
					pauseOnHover={true}
					speed={40}
					className={cls.marquee}>
					<Grid container spacing={{ xs: 2, md: 3 }}>
						{Array.from(Array(8)).map((_, index) => (
							<Grid item xs={6} sm={4} md={3} lg={1.5} xl={1.5} key={index}>
								<div className={cls.brend_image}>
									<img src={AppleImage} alt="BrendsImage" />
								</div>
							</Grid>
						))}
					</Grid>
				</Marquee>
			</div>
		</div>
	);
}

export default Brend