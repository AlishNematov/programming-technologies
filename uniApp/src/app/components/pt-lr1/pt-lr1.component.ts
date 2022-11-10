import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { luggage } from '../../../assets/data/data';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-pt-lr1',
  templateUrl: './pt-lr1.component.html',
  styleUrls: ['./pt-lr1.component.scss']
})
export class PtLr1Component implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['id', 'amountOfLuggage', 'totalWeight', 'average'];
  dataSource = new MatTableDataSource(luggage);
  clickedRows = new Set<{id: number, amountOfLuggage: number, totalWeight: number}>();
  amountOfLuggage = '';
  totalWeight = '';
  id: number[] = [];
  visibility = true;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    ) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '300px',
      data: {amountOfLuggage: this.amountOfLuggage,
        totalWeight: this.totalWeight},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const ids = this.dataSource.data.map(item => item.id)
        const lastId = Math.max(...ids);

        luggage.push({
          id: lastId + 1,
          amountOfLuggage: +result.amountOfLuggage,
          totalWeight: +result.totalWeight
        })
        this.dataSource = new MatTableDataSource(luggage);
      }
    });
  }

  clickRows(row: any) {
    if (!this.clickedRows.has(row)) {
      this.clickedRows.add(row);
    } else {
      this.clickedRows.delete(row);
    }
  }

  getTotalWeight() {
    return this.dataSource.data.map(t => t.totalWeight).reduce((acc, value) => acc + value, 0);
  }

  getTotalAmount() {
    return this.dataSource.data.map(t => t.amountOfLuggage).reduce((acc, value) => acc + value, 0);
  }

  getTotalAverage() {
    return this.getTotalWeight() / this.getTotalAmount();
  }

  getMaxLuggage() {
    this.id = luggage.filter(item => item.amountOfLuggage === Math.max(...luggage.map(i => i.amountOfLuggage))).map(item => item.id);
    if (this.id.length) this.visibility = false;
  }

  isMaxLuggage(id: number) {
    return this.id.includes(id);
  }

  resetMaxLuggage() {
    this.visibility = true;
    this.id = [];
  }

  removeRows() {
    [...this.clickedRows].forEach(item => {
      luggage.splice(luggage.findIndex(i => i.id === item.id),1)
    })
    this.clickedRows.clear();
    this.dataSource = new MatTableDataSource(luggage);
  }

}
