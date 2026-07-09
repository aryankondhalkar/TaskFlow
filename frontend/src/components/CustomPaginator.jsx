import { Button } from "primereact/button";

const CustomPaginator = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="custom-paginator">
      <Button
        icon="pi pi-angle-left"
        label="Previous"
        outlined
        disabled={currentPage === 1}
        onClick={onPrevious}
      />

      <span className="paginator-page">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </span>

      <Button
        label="Next"
        icon="pi pi-angle-right"
        iconPos="right"
        outlined
        disabled={currentPage === totalPages}
        onClick={onNext}
      />
    </div>
  );
};

export default CustomPaginator;
