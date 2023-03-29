import { Product } from '../../../types';
import { columns } from '../product-columns-definition';
import { useCallback } from 'react';

interface ProductTableProps {
  products?: Product[],
  onSelectProduct?: (product: Product) => void,
}

const ProductTable = ({ products, onSelectProduct }: ProductTableProps) => {
  const handleSelectProduct = useCallback((product: Product) => {
    if(onSelectProduct) {
      onSelectProduct(product)
    }
  }, [onSelectProduct]);

  return (
    <div className="mt-4 -mb-3">
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm my-8">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
              <tr>
                {columns.map((column) => (
                  <th className="
                      border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3
                      text-slate-400 dark:text-slate-200 text-left
                    ">
                    {column.title}
                  </th>
                ))}
              </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
              {(products || []).map((product) => (
                <tr>
                  {columns.map((column) => (
                    <td className="border-b border-slate-100 dark:border-slate-700
                         p-4 pl-8 text-slate-500 dark:text-slate-400 cursor-pointer"
                        onClick={() => handleSelectProduct(product)}
                    >{
                      column.formatter ?
                        column.formatter(product) :
                        `${product[column.field]}`
                    }</td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="
          absolute inset-0 pointer-events-none
          border border-black/5 rounded-xl dark:border-white/5
        "></div>
      </div>
    </div>
  )
}
export default ProductTable;
