type TourProps = {
  params: { id: number };
};

const Tour = ({ params }: TourProps) => {
  console.log(params.id);

  return <div>1223</div>;
};

export default Tour;
