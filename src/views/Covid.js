import React from 'react';
import useFetch from '../components/fetch';


function Covid() {

	const url = 'https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z';
    const {data, isLoading, isError} = useFetch(url);
      

	return (
		<div>
			<table id="customers">
				<thead>
					<tr>
						<th>Confirmed</th>
						<th>Active</th>
						<th>Deaths</th>
						<th>Recovered</th>
					</tr>
				</thead>
				<tbody>
					{isError === false && isLoading === false && data && data.length > 0 && 
						data.map(item => {
						return (
							<tr key={item.ID}>
								<td>{item.Confirmed}</td>
								<td>{item.Active}</td>
								<td>{item.Deaths}</td>
								<td>{item.Recovered}</td>
							</tr>
						)
					})}
					{isLoading === true &&
						<tr >
                            <td colSpan='4' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
					}
					{isError === true &&
						<tr >
                            <td colSpan='4' style={{ 'textAlign': 'center' }}>Some thing wrong with API</td>
                        </tr>
					}
				</tbody>

			</table>
		</div>
	)
}

export default Covid