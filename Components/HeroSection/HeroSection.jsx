import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Style from './HeroSection.module.css'
import images from './../../assets/index'
// Token va SearchToken komponentlarini import qilayapmiz
import { Token, SearchToken } from '../index'

function HeroSection({ accounts, tokenData }) {
	// State lar
	const [openSettings, setOpenSettings] = useState(false) // Settings oynasini ochish/yopish
	const [openToken, setOpenToken] = useState(false) // Token 1 oynasi ochiq/yoq
	const [openTokensTwo, setOpenTokensTwo] = useState(false) // Token 2 oynasi ochiq/yoq

	// Token 1 va Token 2 ma'lumotlari
	const [tokenOne, setTokenOne] = useState({
		name: '',
		image: '',
	})
	const [tokenTwo, setTokenTwo] = useState({
		name: '',
		image: '',
	})

	return (
		<div className={Style.HeroSection}>
			<div className={Style.HeroSection_box}>
				<div className={Style.HeroSection_box_heading}>
					<p>Swap</p>
					<div className={Style.HeroSection_box_heading_img}>
						<Image
							src={images.close} // close icon
							alt='image close'
							width={50}
							height={50}
							onClick={() => setOpenSettings(true)} // Settings oynasini ochish
						/>
					</div>
				</div>

				{/* Token 1 input */}
				<div className={Style.HeroSection_box_input}>
					<input type='text' placeholder='0' />
					<button onClick={() => openToken(false)}>
						<Image
							src={images.image || images.etherlogo} // default logo
							alt='etherLogo'
							width={50}
							height={50}
						/>
						{tokenOne.name || 'ETH'} {/* Token nomi yoki default ETH */}
						<small>9474</small> {/* balans yoki qiymat */}
					</button>
				</div>

				{/* Token 2 input */}
				<div className={Style.HeroSection_box_input}>
					<input type='text' placeholder='0' />
					<button onClick={() => openToken(true)}>
						<Image
							src={tokenTwo.image || images.etherlogo} // Token 2 logo
							alt='etherLogo'
							width={50}
							height={50}
						/>
						{tokenTwo.name || 'ETH'}
						<small>9474</small>
					</button>
				</div>

				{/* Wallet tugmalari */}
				{accounts ? (
					<button className={Style.HeroSection_box_btn}>Connect Wallet</button>
				) : (
					<button className={Style.HeroSection_box_btn} onClick={() => {}}>
						Swap
					</button>
				)}
			</div>

			{/* Settings oynasi */}
			{openSettings && <Token setOpenSettings={setOpenSettings} />}

			{/* Token 1 qidiruv oynasi */}
			{openToken && (
				<SearchToken
					openToken={setOpenToken}
					token={setTokenOne}
					tokenData={tokenData}
				/>
			)}

			{/* Token 2 qidiruv oynasi */}
			{openToken && (
				<SearchToken
					openToken={setOpenTokensTwo}
					token={setTokenTwo}
					tokenData={tokenData}
				/>
			)}
		</div>
	)
}

export default HeroSection
