type IconProps = React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined
        titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
>

export default IconProps
