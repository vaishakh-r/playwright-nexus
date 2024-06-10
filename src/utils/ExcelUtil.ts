
import { Workbook, Worksheet } from 'exceljs';
import * as xlsx from 'xlsx'
export class ExcelUtil {

    private filePath: string;
    private workbook:  xlsx.WorkBook;
    private worksheet: xlsx.WorkSheet;
    private sheetName: string;

    constructor (filePath: string) {
        this.filePath = filePath;
        this.workbook = xlsx.readFile(this.filePath);
    }

    public readExceData(sheetName: string = this.workbook.SheetNames[0]) : any[] {
        this.worksheet = this.workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(this.worksheet);
    }

    public getRowData(sheetName: string = this.workbook.SheetNames[0], rowNumber: number) : any[] {
        let data = this.readExceData()
        return data[rowNumber];
    }

    public getValue(sheetName: string = this.workbook.SheetNames[0], rowNumber: number, colNum : any) : any[] {
        let rowData = this.getRowData(sheetName, rowNumber);
        return rowData[colNum];
    }

}