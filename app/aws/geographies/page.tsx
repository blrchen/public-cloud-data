import AwsGeographiesPage from './AwsGeographiesPage'

const getGeographies = async () => {
  try {
    const response = await fetch(
      `https://azurespeedjobs20231104.blob.core.windows.net/jobs/cloud-catalog/aws/geographies.json`
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch geographies:', error)
    throw error
  }
}

const Page = async () => {
  try {
    const geographiesData = await getGeographies()
    return <AwsGeographiesPage geographies={geographiesData} />
  } catch (error) {
    return <div>Error loading geographies.</div>
  }
}

export default Page