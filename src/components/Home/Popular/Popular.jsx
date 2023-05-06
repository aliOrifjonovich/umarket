import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

import cls from "./popular.module.css";

import { BasketIcon, ComparisonIcon, FavoritesIcon } from "../../icons.js";
import goods from "../../../assets/images/goods.png";
import { Grid } from "@mui/material";

const Popular = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://192.168.96.42:8000/popular_products?limit=4")
			.then((res) => setProducts(res.data))
			.catch((err) => {
				console.log("err", err);
			});
	}, []);

	return (
		<div className="container">
			<div className={cls.wrapper}>
				<h1 className={cls.text}>Хиты продаж</h1>
				<Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
					{products.map((item) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
							<div className={cls.popular_products_product}>
								<img
									src={item.image}
									alt="phoneImage"
									className={cls.popular_image}
								/>
								<h2>{item.name}</h2>
								<div className={cls.price}>
									<h1>{item.cost}</h1>
									<h3>От {(item.cost / 12).toFixed(2)} сум/12 мес</h3>
								</div>
								<div className={cls.stars}>
									<Stack spacing={1}>
										<Rating
											name="half-rating"
											defaultValue={item.rating}
											precision={0.5}
										/>
									</Stack>
								</div>
								<div className={cls.buttons}>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}>
										<Button variant="contained">
											<BasketIcon fill="white" />
											Contained
										</Button>
										<div className={cls.reactions}>
											<Button
												sx={{
													minWidth: "auto",
													padding: "2px",
													height: "25px",
													// margin: "0 20px"
												}}>
												<ComparisonIcon />
											</Button>
											<Button
												sx={{
													minWidth: "auto",
													padding: "2px",
													height: "25px",
												}}>
												<FavoritesIcon />
											</Button>
										</div>
									</Stack>
								</div>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Popular;
