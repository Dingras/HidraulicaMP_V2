import { Category } from "../../components/Products/Category"
import HydraulicPistonLoader from '../../components/HydraulicPistonLoader/HydraulicPistonLoader'
import { useState, useEffect } from "react"
import { GetCategories } from "../../services/js/products"
import Alert from "../../components/Alert"


export default function Categories() {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchApiData = async () => {
        try {
            const result = await GetCategories();
            setCategories(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Nuestros Productos</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ofrecemos una amplia gama de productos de alta calidad diseñados para satisfacer tus necesidades.
                </p>
            </div>
                {
                    loading ? (
                        <HydraulicPistonLoader />
                    ) : categories.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {
                                categories.map((category) => (
                                    <Category key={category.id} title={category.name} imageUrl={category.url_img} id_category={category.id} />
                                ))
                            }
                        </div>
                    ) : (
                        <Alert message="No hay productos cargados actualmente." variant="info" />
                    )
                }
        </div>
    )
}