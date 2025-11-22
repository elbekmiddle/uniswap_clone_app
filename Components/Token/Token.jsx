import React from 'react'
import Style from './Token.module.css'
import images from './../../assets/index'
import Toggle from '../Toggle/Toggle'
import Image from 'next/image'

function Token({ setOpenSettings }) {
	return (
		<div className={Style.Token}>
			<div className={Style.Token_box}>
				<div className={Style.Token_box_heading}>
					<h4>Settings</h4>
					<Image
						className={Style.Token_box_heading_img}
						src={images.close}
						alt='close'
						width={50}
						height={50}
						onClick={() => setOpenSettings(false)}
					/>
				</div>
				<p className={Style.Token_box_para}>
					Slippage tolerance
					<Image src={images.lock} alt='img' width={20} height={20} />
				</p>
				<div className={Style.Token_box_input}>
					<button>Auto</button>
					<input type='text' placeholder='0.10%' />
				</div>
				<p className={Style.Token_box_para}>
					Slippage tolerance
					<Image src={images.lock} alt='img' width={20} height={20} />
				</p>
				<div className={Style.Token_box_input}>
					<input type='text' placeholder='30' />
					<button>Minutes</button>
				</div>
				<h2>Interface Settings</h2>
				<div className={Style.Token_box_toggle}>
					<p className={Style.Token_box_para}>Transaction deadline</p>
					<Toggle label="No"/>
				</div>
			</div>
		</div>
	)
}

// ✅ Token default export qilindi
export default Token
