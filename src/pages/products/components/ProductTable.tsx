import { Product } from '../../../types';
import { columns } from '../product-columns-definition';
import { ComponentProps } from 'react';

interface ProductTableProps extends ComponentProps<'div'> {
  products?: Product[],
}

const ProductTable = ({
  products,
  className,
  ...rest
}: ProductTableProps) => {
   return (
    <div className={`mt-4 -mb-3 ${className}`} {...rest}>
      <div className="relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm my-4">
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
                    >{
                      column.formatter ?
                        column.formatter(product) :
                        `${column.field ? product[column.field] : ''}`
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
