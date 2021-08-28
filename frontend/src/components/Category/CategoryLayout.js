import { Grommet, Box, Grid } from "grommet";

function Layout(props) {
	return (
		<Grommet style={{marginTop: 70}}>
				<Grid
					background="light-2"
					rows={["auto", "flex"]}
					columns={["auto", "flex"]}
					height="full-screen"
					gap="small"
					pad="medium"
					responsive
					areas={[
						{ name: "search", start: [0, 0], end: [1, 0] },
						{ name: "nav", start: [0, 1], end: [0, 1] },
						{ name: "main", start: [1, 1], end: [1, 1] },
					]}
				>
								{props.children}
				</Grid>
			</Grommet>
	);
}


export default Layout;