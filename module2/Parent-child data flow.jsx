// data to show on all the compontents
// it will be easier because you can change data only on one place instead editing all components one by one
const data = {
  heading: "99% off all items!",
  callToAction: "Everything must go!",
};

// parent component
export function Promo() {
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
}

// child component
export function PromoHeading(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </>
  );
}
