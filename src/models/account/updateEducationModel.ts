export const dataForServer = (values:any) => {

    return {
        "college": values?.college || undefined,

        "degree": values?.degree || undefined,

        "year": values?.year || undefined,

        "major": values?.major || undefined,
    }
}