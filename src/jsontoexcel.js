import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportToExcel = ({finalDataDetail}) => {
    const fileType = "xlsx"
    const exportToExcelfile = (finalDataDetail) => {
       const finalDataDetail1 = XLSX.utils.json_to_sheet(finalDataDetail);
       const wb = {Sheets:{"finalDataDetail":finalDataDetail1}, SheetNames:["comments-data"]};
       const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"});
       const data1 = new Blob([excelBuffer], {type:fileType});
       FileSaver.saveAs(data1, "myfile"+".xlsx")
       console.log(data1)
       
    }


    return(
        // <button varien onClick={exportToExcelfile}>Download File</button>
         <button varien onClick={()=>exportToExcelfile(finalDataDetail)}>Export to excel</button>
    )
}