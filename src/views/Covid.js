import React from 'react';
import useFetch from '../custom/fetch';
import moment from 'moment';


function Covid() {
	const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);;

	const url = `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`;
    const {data, isLoading, isError} = useFetch(url, true);
      

	return (
		<div>
			<table id="customers">
				<thead style={{textAlign: 'center'}}>
					<tr>
						<th>Date</th>
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
								<td>{item.Date}</td>
								<td>{item.Confirmed}</td>
								<td>{item.Active}</td>
								<td>{item.Deaths}</td>
								<td>{item.Recovered}</td>
							</tr>
						)
					})}
					{isLoading === true &&
						<tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
					}
					{isError === true &&
						<tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Some thing wrong with API</td>
                        </tr>
					}
				</tbody>

			</table>
		</div>
	)
}

export default Covid