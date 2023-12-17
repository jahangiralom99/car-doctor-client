import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AllOrder from "./AllOrder";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hookes/useAxiosSecure";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    // axios.get(`http://localhost:3000/orders?email=${user.email}`, {withCredentials: true})
    //   .then(res => {
    //     setOrders(res.data)
    //   })
    axiosSecure.get(`/orders?email=${user.email}`)
    .then(res => setOrders(res.data))
 
  }, [user, axiosSecure]);


  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/orders/${id}`)
              .then(data => {
                //   console.log(data);
                  if (data.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                      const remaining = orders.filter(order => order._id !== id);
                      setOrders(remaining)
                  }
          })
       
      }
    });
    };
    

    const handleUpdateOrder = (id) => {
        axios.patch(`http://localhost:3000/orders/${id}`, { status: "confirm" })
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id);
                    const updated = orders.find(order => order._id === id);
                    updated.status = "Confirm";
                    const newOrder = [updated, ...remaining];
                    setOrders(newOrder);
            }
        })
    }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Title</th>
              <th>Price</th>
              <th>date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <AllOrder
                key={order._id}
                order={order}
                    handleDelete={handleDelete}
                    handleUpdateOrder= {handleUpdateOrder}
              ></AllOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
