const table = [{
    id: 1,
    category: "General",
    videoLink: "https://example.com/video1",
    status: "Active"
}, {
    id: 2,
    category: "Technical",
    videoLink: "https://example.com/video2",
    status: "Inactive"
}]
const AddQust = () =>{
    return(
       <>
        <h1>FAQ</h1>
        <div>
            <input type="text" />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Video Link</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.category}</td>
                                <td><a href={item.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a></td>
                                <td>{item.status}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
       </>
    )
}
export default AddQust;