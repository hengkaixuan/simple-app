import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import "./TreeMenu.css";

const TreeNode = ({ node, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(node);
  };

  const handleClick = (e) => {
    setSelectedItem(e);
    console.log("val:" + selectedItem);
  };

  if (node.children && node.children.length > 0) {
    return (
      <ListGroup.Item
        className={selected ? "selected" : ""}
        onClick={(e) => handleClick(e.target.innerText)}
      >
        <Button className="toggle-btn" onClick={handleToggle}>
          {isOpen ? (
            <i className="bi bi-dash" style={{ color: "black" }}></i>
          ) : (
            <i class="bi bi-plus" style={{ color: "black" }}></i>
          )}
        </Button>
        {node.name}
        {isOpen && (
          <ListGroup variant="flush">
            {node.children.map((childNode, index) => (
              <TreeNode key={index} node={childNode} onToggle={onToggle} />
            ))}
          </ListGroup>
        )}
      </ListGroup.Item>
    );
  } else {
    return (
      <ListGroup.Item
        className={selected ? "selected" : ""}
        onClick={(e) => handleClick(e.target.innerText)}
      >
        {node.name}
      </ListGroup.Item>
    );
  }
};

function TreeMenu({ data }) {
  const handleToggle = (toggledNode) => {
    // Implement toggle logic here if needed
    console.log("Toggled:", toggledNode);
  };

  return (
    <div className="p-4">
      <ListGroup>
        {data.map((node, index) => (
          <TreeNode key={index} node={node} onToggle={handleToggle} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TreeMenu;
