import React, {useEffect} from "react"
import './TopBarModal.css'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption, setSelectedOption2 } from "../actions";
const TopBarModal=(props)=>{
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);
  const selectedOption2 = useSelector((state) => state.selectedOption2);

  const elementRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if ((elementRef.current && !elementRef.current.contains(event.target))) {
        if(props.reff.current && !props.reff.current.contains(event.target)){
          props.sendDisplayBox(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    props.sendLocalData(selectedValue)
    dispatch(setSelectedOption(selectedValue));
  };

  const handleSelectChange2 = (event) => {
    const selectedValue = event.target.value;
    props.sendLocalData2(selectedValue)
    dispatch(setSelectedOption2(selectedValue));
  };

    return(
        <div className="top-bar-modal__wrapper" ref={elementRef}>
            <div className="top-bar-modal__container">
                <div className="top-bar-modal__label">Grouping</div>
                <select className="top-bar-modal__container__select" id="group" onChange={handleSelectChange} value={selectedOption}>
                    <option className="top-bar-modal__container__option" value="status">Status</option>
                    <option className="top-bar-modal__container__option" value="priority">Priority</option>
                    <option className="top-bar-modal__container__option" value="user">User</option>
                </select>
            </div>
            <div className="top-bar-modal__container">
                <div className="top-bar-modal__label">Ordering</div>
                <select className="top-bar-modal__container__select" id="order" onChange={handleSelectChange2} value={selectedOption2}>
                    <option className="top-bar-modal__container__option" value="order-priority">Priority</option>
                    <option className="top-bar-modal__container__option" value="title">Title</option>
                </select>
            </div>
        </div>
    )
}
export default TopBarModal