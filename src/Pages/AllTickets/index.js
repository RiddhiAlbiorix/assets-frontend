import { Table, Select } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useQuery } from '@apollo/client';
import { GET_ALL_TICKETS_QUERY } from '../../gql/Query/AllTickets';
import { GET_USERS_BY_ROLE, GET_USER_ROLE } from "../../gql/Query/Users"
import Loader from '../../Components/UI/Loader';
import Cookies from 'js-cookie';


const AllTicketsListing = () => {

	const role = Cookies.get('role')

	const { data: tickets, loading, refetch } = useQuery(GET_ALL_TICKETS_QUERY, { variables: { input: null } })

	const { data } = useQuery(GET_USER_ROLE);
	const { data: employeeList } = useQuery(GET_USERS_BY_ROLE, {
		variables: {
			skip: !data,
			roleId: data?.role?.filter((item) => item.name == "employee")[0].id
		}
	});

	const handleChange = (value) => {
	 
			refetch({
				input: {
					status: null,
					userId: value
				}
			})
		
	};

	return (
		<>
			{loading && <Loader />}
			<div className='text-center mb-3'>
				<h2 className='d-inline fs-4 fw-bold text-center' style={{marginLeft:'6.5rem'}}>MANAGE ALL TICKETS</h2>
				{
					role === "admin" && (
						<div className='add-button'>
							<Select defaultValue={null} style={{ width: 150 }} onChange={handleChange}>
								<option value={null} key={null}>All users</option>
								{
									employeeList?.usersByRole?.map(item => (
										<option value={item.id} key={item.id}>{`${item.firstName} ${item.lastName}`}</option>
									))
								}
							</Select>
						</div>
					)
				}
			</div>
			<Table bordered
				columns={tableColumns}
				dataSource={tickets?.tickets.map(item => ({ ...item, key: item.id }))}
				pagination={false}
			/>
		</>
	)
}

export default AllTicketsListing