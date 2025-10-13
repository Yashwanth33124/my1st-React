


function CommonForm({formControls = [] ,formData,setformData}) {

  function Renderform(getcurrentelement) {
   
    let content =null

  switch (getcurrentelement?.componentType) {
    case value:
        
        break;
  
    default:
        break;
  }

  }
    return(
    <form action="">
        {
            formControls?.length ?
            formControls.map(singleform=>  Renderform(singleform))
            : null
        }
        
    </form>
    )
}

export default CommonForm