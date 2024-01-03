import { useState } from "react"

export interface ComboBoxDataProps<T> {
    data: T
}

const useComboBoxData = ({ data }: ComboBoxDataProps<any>) => {
    const [selected, setSelected] = useState(data[0])
    const [query, setQuery] = useState("")

    const filtereddata =
        query === ""
            ? data
            : data.filter((d: any) =>
                  d.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
              )
}
