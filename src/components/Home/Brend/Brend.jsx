import React from 'react'
import cls from "./brend.module.css"
import Grid from "@mui/material/Grid"

const Brend = () => {
  return (
		<div className="container">
			<div className={cls.wrapper}>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					sx={{ width: "100%" }}>
					<Grid
						item
						xs={6}
						sm={4}
						md={3}
						lg={1.5}
						xl={1.5}
						sx={{ border: "red 2px solid" }}>
						<h3>Телефоны</h3>
					</Grid>
					<Grid
						item
						xs={6}
						sm={4}
						md={3}
						lg={1.5}
						xl={1.5}
						sx={{ border: "red 2px solid" }}>
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
			</div>
		</div>
	);
}

export default Brend