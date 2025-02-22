import React from "react";

export default function PaymentTable({ date, token, currentToken, status }) {
  const formatTime = (mongoDate) => {
    const date = new Date(mongoDate);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const formateDate = (mongoDate) => {
    const date = new Date(mongoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <tbody>
      {status === "add" ? (
        <tr className="py-4 border-b border-blue grid grid-cols-4 text-center">
          <td>{formateDate(date)}</td>
          <td>{formatTime(date)}</td>
          <td>+{token}</td>
          <td>{currentToken}</td>
        </tr>
      ) : (
        <tr className="py-4 border-b border-blue grid grid-cols-4 text-center">
          <td>{formateDate(date)}</td>
          <td>{formatTime(date)}</td>
          <td>-{token}</td>
          <td>{currentToken}</td>
        </tr>
      )}
    </tbody>
  );
}
