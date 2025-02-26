import AC from "../Icons/AC";
import Automatic from "../Icons/Automatic";
import Bathroom from "../Icons/Batchroom";
import Fully from "../Icons/Fully";
import Kitchen from "../Icons/Kitchen";
import Line from "../Icons/Line";
import Location from "../Icons/Location";
import Tv from "../Icons/TV";
import Van from "../Icons/Van";
import css from "./CatalogItems.module.css";
import Alcove from "../Icons/Alcove";
import { Formik, Form } from "formik";

import CatalogList from "../CatalogList/CatalogList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/campers/operations";

export default function CatalogItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Formik>
        <Form>
          <div className={css.locationWrapper}>
            <p className={css.titleLocation}>Location</p>
            <div className={css.locationSvg}>
              <Location />
            </div>

            <input
              type="text"
              placeholder="Kyiv, Ukraine"
              className={css.locationInput}
            />
          </div>
          <div>
            <h3 className={css.filtersTitle}>Filters</h3>
            <h3 className={css.vahicleTitle}>Vehicle equipment</h3>
            <Line />
            <div>
              <div className={css.wrapperAmenities}>
                <button type="button" className={css.filterAmenities}>
                  <AC />
                  AC
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Automatic />
                  Automatic
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Kitchen />
                  Kitchen
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Tv />
                  TV
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Bathroom />
                  Bathroom
                </button>
              </div>

              <h3 className={css.vehicleTypeTitle}>Vehicle Type</h3>
              <Line />
              <div className={css.typeWrapper}>
                <button type="button" className={css.filterType}>
                  <Van />
                  Van
                </button>
                <button type="button" className={css.filterType}>
                  <Fully />
                  Fully Integrated
                </button>
                <button type="button" className={css.filterType}>
                  <Alcove />
                  Alcove
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
      <CatalogList />
    </div>
  );
}
