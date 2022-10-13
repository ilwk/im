interface UsersTableProps {
  data: {
    avatar: string;
    name: string;
    role: string;
    username: string;
    created_time: string;
  }[];
}

export const CustomersTable = ({ data }: UsersTableProps) => {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>

      <td>{item.role}</td>
      <td>{item.username}</td>
      <td>{item.created_time}</td>
      <td></td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>账户姓名</th>
          <th>权限</th>
          <th>账号</th>
          <th>创建时间</th>
          <th />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
