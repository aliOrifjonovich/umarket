import React from "react";
import { LineIcon, MainLogo, MiniLogo } from "../../icons";
import Scan from "../../../assets/images/scan.png";
import GoogleIcon from "../../../assets/images/Badge.png";
import AppStoreIcon from "../../../assets/images/Badge-2.png";
import { Grid } from "@mui/material";

import cls from "./marketApp.module.css";

const MarketApp = () => {
	return (
		<div className={cls.wrapper}>
			<div className="container">
				<Grid
					container
					rowSpacing={5}
					sx={{
            width:"100%",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						sx={{ display: "flex", alignItems: "center"}}>
						<div className={cls.downloadApps}>
							<div className={cls.logo_text}>
								<span>
									<MiniLogo />
								</span>
								<LineIcon />
								<h1>mobile application</h1>
							</div>

							<h1>Заказывайте через мобильное приложение</h1>

							<div className={cls.apps}>
								<img src={GoogleIcon} alt="GoogleIcon" />
								<img src={AppStoreIcon} alt="AppStoreIcon" />
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4} xl={4}>
						<div className={cls.scaning}>
							<img src={Scan} alt="AppstoreIcon" />
						</div>
					</Grid>
					<Grid
						item
						s={12}
						sm={6}
						md={4}
            xl={4}
						sx={{ display: "flex", alignItems: "center" }}>
						<h3 className={cls.qrCode}>
							Отсканируйте QR-код <br /> и установите приложение
						</h3>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default MarketApp;
