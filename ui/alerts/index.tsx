import Swal from 'sweetalert2'
const errorAlert=(title:string,text:string)=>{
    return Swal.fire({
        icon: `error`,
        title: `${title}`,
        text: `${text}`,
      })
}
const successAlert=(title:string,text:string)=>{
    return Swal.fire({
        icon: `success`,
        title: `${title}`,
        text: `${text}`,
      })
}
const interrogativeAlert=(title:string,text:string)=>{
    return Swal.fire({
        icon: `question`,
        title: `${title}`,
        text: `${text}`,
      })
}
const warningAlert=(title:string,text:string)=>{
    return Swal.fire({
        icon: `warning`,
        title: `${title}`,
        text: `${text}`,
      })
}

export {
    errorAlert,
    successAlert,
    interrogativeAlert,
    warningAlert
}