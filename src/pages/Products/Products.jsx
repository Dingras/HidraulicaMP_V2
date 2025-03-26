import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/Card"
import { Button } from "../../components/Button"
import HydraulicPistonLoader from "../../components/HydraulicPistonLoader/HydraulicPistonLoader"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetProductsByCategory, GetCategoryById } from "../../services/js/products"
import Alert from "../../components/Alert"


export default function Products() {

    const { id } = useParams()
    const [dataCategory, setDataCategory] = useState({})
    const [dataProductsFilter, setDataProductsFilter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetDataCategory(id)
        GetProductsFilter(id)
    }, [id])


    const GetDataCategory = async (id) => {
        try {
            const result = await GetCategoryById(id);
            console.log(result)
            setDataCategory(result.category);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const GetProductsFilter = async (id) => {
        try {
            const result = await GetProductsByCategory(id);
            console.log(result)
            setDataProductsFilter(result.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Nuestros {dataCategory.name}</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ofrecemos una amplia gama de {dataCategory.name} de alta calidad diseñados para satisfacer tus necesidades.
                </p>
            </div>

            {
                loading ? (
                    <HydraulicPistonLoader />
                ) : dataProductsFilter.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dataProductsFilter.map((product) => (
                        <Card
                            key={product.id}
                            className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow pb-0"
                        >
                            <div className="relative h-48 justify-items-center">
                                <img
                                    src={product.url_img || "/placeholder.svg"}
                                    alt={product.name}
                                    className="h-48"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-blue-600">{product.name}</CardTitle>
                            </CardHeader>
                            <CardFooter className="mb-0 mt-auto">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Más información
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                ) : (
                    <Alert message="No hay productos disponibles en esta categoría" variant="info" />
                )
            }
        </div>
    )
}