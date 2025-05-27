import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import * as THREE from 'three'
import { UiTypography } from '@shared/ui/UiTypography'

const Home3DFurnitureModal = () => {
	// Состояния для размеров стола
	const [dimensions, setDimensions] = useState({
		width: 2,
		height: 0.8,
		depth: 1,
		thickness: 0.05,
	})

	// Состояния для цветов
	const [colors, setColors] = useState({
		top: '#8B4513', // Коричневый (дерево)
		legs: '#654321', // Темно-коричневый
	})

	// Обработчики изменения размеров
	const handleDimensionChange = e => {
		const { name, value } = e.target
		setDimensions(prev => ({
			...prev,
			[name]: parseFloat(value),
		}))
	}

	// Обработчики изменения цвета
	const handleColorChange = e => {
		const { name, value } = e.target
		setColors(prev => ({
			...prev,
			[name]: value,
		}))
	}

	// Компонент стола
	const Table = () => (
		<group>
			{/* Столешница */}
			<Box
				args={[dimensions.width, dimensions.thickness, dimensions.depth]}
				position={[0, dimensions.height / 2 + dimensions.thickness / 2, 0]}
			>
				<meshStandardMaterial color={colors.top} />
			</Box>

			{/* Ножки */}
			{[
				{ x: dimensions.width / 2 - 0.1, z: dimensions.depth / 2 - 0.1 },
				{ x: -dimensions.width / 2 + 0.1, z: dimensions.depth / 2 - 0.1 },
				{ x: dimensions.width / 2 - 0.1, z: -dimensions.depth / 2 + 0.1 },
				{ x: -dimensions.width / 2 + 0.1, z: -dimensions.depth / 2 + 0.1 },
			].map((pos, index) => (
				<Box
					key={index}
					args={[0.1, dimensions.height, 0.1]}
					position={[pos.x, 0, pos.z]}
				>
					<meshStandardMaterial color={colors.legs} />
				</Box>
			))}
		</group>
	)

	return (
		<div
			style={{
				display: 'flex',
				height: 'calc(100vh - var(--page-layout-height))',
			}}
		>
			{/* Панель управления */}
			<div style={{ width: '300px', padding: '20px', background: '#f5f5f5' }}>
				<UiTypography
					font='Montserrat-B'
					Tag='h2'
					style={{
						marginBottom: '20px',
						fontSize: '20px',
					}}
				>
					Настройки стола:
				</UiTypography>
				<UiTypography font='Montserrat-SB' Tag='h3'>
					Размеры:
				</UiTypography>
				{Object.entries(dimensions).map(([key, value]) => (
					<div key={key} style={{ margin: '10px 0 15px 0' }}>
						<label>
							<UiTypography font='Montserrat-R'>
								{key}: {value.toFixed(2)} м
							</UiTypography>
							<input
								type='range'
								name={key}
								min='0.1'
								max='3'
								step='0.05'
								value={value}
								onChange={handleDimensionChange}
								style={{ width: '100%' }}
							/>
						</label>
					</div>
				))}
				<UiTypography
					Tag='h3'
					font='Montserrat-B'
					style={{
						marginBottom: '20px',
						fontSize: '20px',
					}}
				>
					Цвета:
				</UiTypography>
				<div style={{ marginBottom: '15px' }}>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<UiTypography font='Montserrat-R'>Столешница:</UiTypography>
						<input
							type='color'
							name='top'
							value={colors.top}
							onChange={handleColorChange}
							style={{ marginLeft: '10px' }}
						/>
					</label>
				</div>
				<div style={{ marginBottom: '15px' }}>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<UiTypography font='Montserrat-R'>Ножки:</UiTypography>
						<input
							type='color'
							name='legs'
							value={colors.legs}
							onChange={handleColorChange}
							style={{ marginLeft: '10px' }}
						/>
					</label>
				</div>
			</div>

			{/* 3D-просмотрщик */}
			<div style={{ flex: 1 }}>
				<Canvas camera={{ position: [3, 2, 3], fov: 50 }} shadows>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} intensity={1} castShadow />
					<OrbitControls
						enablePan={true}
						enableZoom={true}
						enableRotate={true}
					/>
					<Table />
					<gridHelper args={[10, 10]} />
				</Canvas>
			</div>
		</div>
	)
}

export { Home3DFurnitureModal }
