import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productCard: {
			position: 'relative',
			width: '100%',
			height: '130px',
			backgroundColor: '#ffffff',
			boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.1)'
		},
		productCardFlex: {
			display: 'flex',
			position: 'relative',
			height: '100%',
			width: '90%',
			margin: 'auto',
			justifyContent: 'space-between'
		},
		informationContainer: {
			position: 'relative',
			width: '80%',
			left: '0'
		},
		info: {
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingLeft: '20px',
			width: '80%',
			left: 0,
			height: '120px',
			margin: 0,
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)'
		},
		img: {
			width: '65px',
			marginRight: '20px',
			objectFit: 'contain'
		},
		details: {},
		title: {},
		detailMargin: {},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			position: 'absolute',
			right: '0px',
			height: '100%'
		},
		buttonAdd: {
			color: '#00c896'
		},
		buttonRemove: {
			color: '#C06766'
		},
		divider: {
			transform: 'translateY(-1px)',
			width: '90%',
			margin: 'auto'
		}
	})
);

export default useStyles;
