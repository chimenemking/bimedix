'use client'
import { E164Number } from "libphonenumber-js/core";
import { Control } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { FormFieldType } from "./forms/PatientForm"
import Image from "next/image"
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'



interface CustomProps {
    control: Control<any>
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldType;
}

const RenderInput = ({field,props}:{field:any, props:CustomProps})=>{
    const {fieldType, iconSrc, iconAlt, placeholder} = props;
       switch (fieldType) {
        case FormFieldType.INPUT:
            
           return(
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
                {iconSrc && (
                    <Image 
                     src={iconSrc}
                     height={24}
                     width={24}
                     alt={props.iconAlt || "icon"}
                     className="ml-2"/>
                )}
                  <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
            </div>
           )
       case FormFieldType.PHONE_INPUT:
        return(
            <FormControl>
                <PhoneInput
                defaultCountry="US"
                placeholder={props.placeholder}
                international
                withCountryCallingCode
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className="input-phone"/>
            </FormControl>
        )
        default:
            break;
       }
}

const CustomFormField = (props: CustomProps)=>{
    const {control,fieldType,name,label} = props
    return(
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1 ">
              {fieldType!== FormFieldType.CHECKBOX && label &&(
                <FormLabel>{label}</FormLabel>
              )}
              <RenderInput field={field} props={props}/>
              <FormMessage className="shad-error"/>
            </FormItem>
          )}
        />
    )
}

export default CustomFormField