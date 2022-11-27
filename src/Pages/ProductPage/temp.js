//  {/* <Box>{BtnValue}</Box>
//                   <Box
//                     bg={"transparent"}
//                     color={"orange.500"}
//                     border={"1px solid "}
//                     display={"flex"}
//                     alignItems={"center"}
//                     rounded={"full"}
//                     padding={"1"}
//                     _hover={{
//                       color: "white",
//                       bg: "orange.500",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => {
//                       setBtnValue(item.inStock - 1);
//                     }}
//                   >
//                     <AddIcon />
//                   </Box> */}

// {/* {BtnValue === 1 ? (
//                     <Box
//                       bg={"transparent"}
//                       display={"flex"}
//                       alignItems={"center"}
//                       color={"orange.500"}
//                       border={"1px solid "}
//                       rounded={"full"}
//                       padding={"1"}
//                       _hover={{
//                         color: "white",
//                         bg: "orange.500",
//                         cursor: "pointer",
//                       }}
//                       onClick={() => {
//                         dispatch({
//                           type: "REMOVE_FROM_CART",
//                           payload: item,
//                         });
//                       }}
//                     >
//                       <DeleteOutlineIcon />
//                     </Box>
//                   ) : (
//                     <Box
//                       bg={"transparent"}
//                       display={"flex"}
//                       alignItems={"center"}
//                       color={"orange.500"}
//                       border={"1px solid "}
//                       rounded={"full"}
//                       padding={"1"}
//                       _hover={{
//                         color: "white",
//                         bg: "orange.500",
//                         cursor: "pointer",
//                       }}

//                       onClick={() => {
//                         setBtnValue(BtnValue - 1);
//                       }}
//                     >
//                       <RemoveIcon />
//                     </Box>
//                   )} */}

// const [error, setError] = useState(false);
// const placedOrderDetails = {
//   payment: {
//     mrp: Total,
//     Discount,
//     totalPaid: Total - Discount,
//   },
//   items: cart?.products?.map(({ productId, quantity }) => {
//     const placedOrderItem = {
//       productId: productId._id,
//       payment: { amount: productId.price, offer: productId.offer },
//       quantity,
//     };
//     return placedOrderItem;
//   }),
// };

// const loadExternalScript = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//   });
// };

// const showRazorpay = async () => {
//   const res = await loadExternalScript(
//     "https://checkout.razorpay.com/v1/checkout.js"
//   );

//   if (!res) {
//     setError("Something went wrong! Payment options are not loaded.");
//     return;
//   }

//   var options = {
//     key_id: "rzp_test_7JQjBPC3b4dsh5",
//     key: "tJJLXDSV7OfQGY717jqZ61ke",
//     amount: Total,
//     currency: cart.map((item) => item.currency),
//     name: "U&I Store",
//     description: "Test Transaction",
//     image:
//       "https://res.cloudinary.com/u-and-i/image/upload/v1626882606/logos/ktine8eik7bk3ckmdfhz.png",
//     order_id: cart.map((item) => item.id),
//     handler: function (response) {
//       placedOrderDetails();
//     },
//     prefill: {
//       name: cart.map((item) => item.firstname + item.lastname),
//       email: "5sconceptsvp@gmail.com",
//       contact: cart.map((item) => "$" + item.number),
//       method: "netbanking",
//     },
//   };
//   var paymentObject = new window.Razorpay(options);
//   paymentObject.on("payment.failed", function (response) {
//     console.log(response.error);
//   });
//   paymentObject.open();
// };
