import React from 'react'

import cls from "../Categories/categories.module.css"
import ForHome from "../../../assets/images/goods-1.png"
import { Grid } from "@mui/material";


const TechHome = () => {
  return (
		<div className="container">
			<div className={cls.categories}>
				<h1>Популярные категории</h1>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					{Array.from(Array(5)).map((_, index) => (
						<Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
							<div className={cls.categories_boxes_box}>
								<img src={ForHome} alt="banner" />
								<h1>Смартфоны</h1>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default TechHome