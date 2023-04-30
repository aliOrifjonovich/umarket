import React from 'react'

import cls  from "./categories.module.css"
import phone from "../../../assets/images/goods-9.png"
import { Grid } from "@mui/material";

const Categories = () => {
  return (
		<div className="container">
			<div className={cls.categories}>
				<h1>Популярные категории</h1>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					{Array.from(Array(4)).map((_, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
						<div className={cls.categories_boxes_box}>
						<img src={phone} alt="banner" />
						<h1>Смартфоны</h1>
					</div>
					</Grid>
					))}
      			</Grid>
			</div>
		</div>
	);
}

export default Categories