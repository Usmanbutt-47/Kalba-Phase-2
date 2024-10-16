export const dataForServer = (values:any) => {

    return {
        title: values?.title,

        courseRate: parseFloat(values?.courseRate),

        description: values?.description,

        bannerUrl: values?.bannerUrl,

        bannerDescriptor: values?.bannerDescriptor,

        isPaidCourse: values?.isPaidCourse === 'false' ? false : true,

        thumbnailUrl: values?.thumbnailUrl,

        thumbnailDescriptor: values?.thumbnailDescriptor,

    }
}