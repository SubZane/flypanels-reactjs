import React from 'react'
import ReactDOM from 'react-dom'
import FlyPanels from './panelComponent/App'
import Slidemenu from './menuComponent/App'
import menudataJSON from './menudata.json'

// const mybutton = React.createRef()
// <button className="custombutton" ref={mybutton}>
// test
// </button>

ReactDOM.render(
	<React.Fragment>
		<FlyPanels
			animation={'door-left'}
			transitionDuration={'0.5s'}
			borderRadius={'7px'}
			customButtonReference={false}
			innerPadding={'0px'}
			backgroundColor={'#E3DFDA'}
			buttonPosition={'right'}
			buttonBackgroundColor={'#8DBFD1'}
			buttonColor={'#fff'}>
			<Slidemenu
				backgroundColor={'#EAE9E3'}
				textColor={'#3D3B39'}
				menuWidth={'100%'}
				transitionDuration={'0.3s'}
				menuDataSource={menudataJSON.treemenu}
				backButtonText={'Go back'}
			/>
		</FlyPanels>
		<FlyPanels
			animation={'flip-top'}
			transitionDuration={'0.5s'}
			borderRadius={'7px'}
			customButtonReference={false}
			innerPadding={'0px'}
			backgroundColor={'#E3DFDA'}
			buttonPosition={'left'}
			buttonBackgroundColor={'#8DBFD1'}
			buttonColor={'#fff'}>
			<p>
				Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Praesent commodo
				cursus magna, vel scelerisque nisl consectetur et.
			</p>
		</FlyPanels>
	</React.Fragment>,
	document.getElementById('root')
)
