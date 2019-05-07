import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

const styles = (theme) => ({
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	}
})

class Navigation extends Component {
	render() {
		const { open, classes, onHandleDrawer } = this.props
		return (
			<Drawer variant="persistent" anchor="left" open={open}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={onHandleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link to={'/recipes/drafts/add'}>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Add Recipe Draft'} />
						</ListItem>
					</Link>
					<Link to={'/recipes/list'}>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Recipes List'} />
						</ListItem>
					</Link>
					<Link to={'/recipes/drafts/list'}>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Recipes Drafts List'} />
						</ListItem>
					</Link>
					<Link to={'/mass-units/list'}>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'Mass Units List'} />
						</ListItem>
					</Link>
				</List>
			</Drawer>
		)
	}
}

export default withStyles(styles, { withTheme: true })(Navigation)
