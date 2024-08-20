function FormGroup({ label, util, children }) {
    return (
      <div className="flex flex-col">
        <label htmlFor={util} className="text-black">
          {label}
        </label>
        {children}
      </div>
    );
  }
  
  export default FormGroup;
  