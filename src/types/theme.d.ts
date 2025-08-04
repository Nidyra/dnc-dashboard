export interface Theme {
    appBackground: string
    appColor:string
    appDefaulStroke:string
    appLogo: string
    appSkeletonFrom:string
    appSkeletonTo:string
    buttons: {
        alert:string
        alertColor:string
        alertHover:string
        disable:string
        desableColor:string
        primary:string
        primaryColor:string
        primaryHover:string
    }
    card:{
        alert:string
        background:string
        border:string
        success:string
        warning:string
    }
    textInput:{
        active:string
        activeColor:string
        borderColor:string
        desabled:string
        deisabledBorderColor:string
        deisabledColor:string
        pleceHolderColor:string
    }
    typographies:{
        error:string
        subtitle:string
        success:string
    }
}