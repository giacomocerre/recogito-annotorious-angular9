
import { AfterViewInit, Component } from '@angular/core';
import OpenSeadragon from "openseadragon"
import * as Annotorious from "@recogito/annotorious-openseadragon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'tryAnn';
  viewer;
  ngAfterViewInit(): void {
    var duomo = {
      Image: {
        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
        Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
        Format: "jpg",
        Overlap: "2",
        TileSize: "256",
        Size: {
          Width:  "13920",
          Height: "10200"
        }
      }
    };
    
    this.viewer = OpenSeadragon({
      id: "openseadragon",
      prefixUrl: "//openseadragon.github.io/openseadragon/images/",
      tileSources: [duomo]
    });
    
    const config = {};
    
    let anno = Annotorious(this.viewer, config);
    anno.setDrawingTool('rect');
    // console.log(anno.setDrawingTool('rect'));

  }
}