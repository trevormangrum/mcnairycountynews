import {NextPage} from "next";
import Layout from "components/Layout";
//TODO: I think we can just implement a query to get all articles in a category.
interface Props {
    category: string;
}
const IndividualCategoryPage: NextPage<Props> = ({category}) => {
    return ( 
           <Layout>
               <h1> {category} </h1>
           </Layout>
          );
};

export default IndividualCategoryPage;



